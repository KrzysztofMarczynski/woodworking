import { useEffect } from 'react'

type SeoProps = {
  title: string
  description: string
  path?: string
}

export function Seo({ title, description, path = '/' }: SeoProps) {
  useEffect(() => {
    const canonical = `https://stolarnia-paw.pl${path}`
    document.title = title

    const setMeta = (selector: string, content: string) => {
      let tag = document.querySelector(selector) as HTMLMetaElement | null
      if (!tag) {
        tag = document.createElement('meta')
        const attr = selector.startsWith('meta[name=') ? 'name' : 'property'
        const key = selector.match(/(?:name|property)=\"([^\"]+)\"/i)?.[1] ?? ''
        if (key) tag.setAttribute(attr, key)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', description)
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[property="og:type"]', 'website')
    setMeta('meta[property="og:url"]', canonical)
    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', description)

    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonicalTag) {
      canonicalTag = document.createElement('link')
      canonicalTag.rel = 'canonical'
      document.head.appendChild(canonicalTag)
    }
    canonicalTag.href = canonical
  }, [title, description, path])

  return null
}
