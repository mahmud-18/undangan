import { sql } from '@vercel/postgres'

// GET — ambil semua wishes
export async function GET() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS wishes (
        id SERIAL PRIMARY KEY,
        nama TEXT NOT NULL,
        ucapan TEXT NOT NULL,
        konfirmasi TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    const { rows } = await sql`
      SELECT * FROM wishes ORDER BY created_at DESC
    `

    return Response.json({ wishes: rows })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

// POST — simpan wish baru
export async function POST(request) {
  try {
    const { nama, ucapan, konfirmasi } = await request.json()

    if (!nama || !ucapan || !konfirmasi) {
      return Response.json({ error: 'Semua field harus diisi' }, { status: 400 })
    }

    await sql`
      INSERT INTO wishes (nama, ucapan, konfirmasi)
      VALUES (${nama}, ${ucapan}, ${konfirmasi})
    `

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}