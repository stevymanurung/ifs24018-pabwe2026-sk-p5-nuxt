import Swal from 'sweetalert2'

export const TYPE_LABELS = { inflow: 'Pemasukan', outflow: 'Pengeluaran' } as const
export const SOURCE_LABELS = { cash: 'Tunai', savings: 'Tabungan', loans: 'Pinjaman' } as const

export function showSuccessDialog(message: string): Promise<unknown> {
  return Swal.fire({ icon: 'success', title: 'Berhasil', text: message, confirmButtonColor: '#059669' })
}

export function showErrorDialog(message: string): Promise<unknown> {
  return Swal.fire({ icon: 'error', title: 'Gagal', text: message, confirmButtonColor: '#059669' })
}

export async function showConfirmDialog(title: string, text: string): Promise<boolean> {
  const result = await Swal.fire({
    icon: 'warning',
    title,
    text,
    showCancelButton: true,
    confirmButtonText: 'Ya, lanjutkan',
    cancelButtonText: 'Batal',
    confirmButtonColor: '#e11d48',
  })
  return result.isConfirmed
}

export function formatRupiah(value: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatDateTime(value: string): string {
  return new Intl.DateTimeFormat('id-ID', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value))
}

/** Ubah nilai <input type="date"> menjadi timestamp query API (awal / akhir hari). */
export function toApiDate(date: string, endOfDay: boolean): string {
  if (!date) return ''
  return `${date} ${endOfDay ? '23:59:59' : '00:00:00'}`
}

/** URL foto profil: absolut dipakai apa adanya, relatif digabung dengan origin API. */
export function resolvePhotoUrl(photo: string): string {
  if (/^https?:\/\//.test(photo)) return photo
  return `${new URL(DELCOM_BASEURL).origin}/${photo.replace(/^\//, '')}`
}
