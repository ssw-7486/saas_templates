#!/usr/bin/env node
/**
 * Lightweight SQLite helpers: init, migrate, seed.
 * DB file: ./.data/dev.db (gitignored)
 */
import { mkdir } from 'fs/promises'
import { readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import Database from 'better-sqlite3'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DATA_DIR = join(ROOT, '.data')
const DB_PATH = join(DATA_DIR, 'dev.db')
const SCHEMA_PATH = join(ROOT, 'db', 'schema.sql')
const SEED_PATH = join(ROOT, 'db', 'seed.sql')

async function init() {
  await mkdir(DATA_DIR, { recursive: true })
  const db = new Database(DB_PATH)
  db.exec('SELECT 1')
  db.close()
  console.log('DB initialized at', DB_PATH)
}

function migrate() {
  const sql = readFileSync(SCHEMA_PATH, 'utf8')
  const db = new Database(DB_PATH)
  db.exec(sql)
  db.close()
  console.log('Schema applied from db/schema.sql')
}

function seed() {
  if (!existsSync(SEED_PATH)) {
    console.log('No db/seed.sql found; skipping seed.')
    return
  }
  const sql = readFileSync(SEED_PATH, 'utf8')
  const db = new Database(DB_PATH)
  db.exec(sql)
  db.close()
  console.log('Seed applied from db/seed.sql')
}

const cmd = process.argv[2]
if (cmd === 'init') {
  init().catch((err) => {
    console.error(err)
    process.exit(1)
  })
} else if (cmd === 'migrate') {
  migrate()
} else if (cmd === 'seed') {
  seed()
} else {
  console.error('Usage: node scripts/db.js <init|migrate|seed>')
  process.exit(1)
}
