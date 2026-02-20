"use client"

import { siteConfig } from "@/config/site.config"
import DOMPurify from "isomorphic-dompurify"
import { usePathname } from "next/navigation"
import parse from "html-react-parser"

export default function PageContent() {
    const pathname = usePathname()
    const pageContent = siteConfig.pagesContent[pathname as keyof typeof siteConfig.pagesContent]

    if (!pageContent) {
        return <div>Страница не найдена</div>
    }

    const cleanHTML = DOMPurify.sanitize(pageContent.content)

    return (
        <p>{parse(cleanHTML)}</p>
    )
}