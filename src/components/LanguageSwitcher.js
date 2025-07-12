'use client'
import { useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
    const router = useRouter()

    const handleChange = (e) => {
        const locale = e.target.value
        router.push(`/${locale}`)
    }

    return (
        <select onChange={handleChange} className="border px-2 py-1 rounded">
            <option value="sq">🇦🇱 Shqip</option>
            <option value="en">🇬🇧 English</option>
        </select>
    )
}
