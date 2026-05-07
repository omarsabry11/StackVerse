import React from 'react'

export default function InfoBadge({ text, children }: { text: string, children: React.ReactElement }) {
    return (
        <div className="flex gap-2 px-4 py-2 rounded-lg">
            {children}
            <span className="font-semibold text-sm text-content dark:text-contentDark">
                {text}
            </span>
        </div>
    )
}
