'use client'
import { useTranslation } from 'react-i18next'
import DonateButton from '@/components/DonateButton'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function AlbanianPage() {
    const { t } = useTranslation()

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-4">
            <LanguageSwitcher />
            <h1 className="text-4xl font-bold text-red-600">{t('welcome')}</h1>
            <DonateButton />
        </main>
    )
}
