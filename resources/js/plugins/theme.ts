// theme.ts
export default class Theme {
    static get storageKey() {
        return 'theme'
    }

    static init(): string {
        const saved = localStorage.getItem(this.storageKey)
        const theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

        this.apply(theme)
        return theme
    }

    static apply(theme: string): void {
        document.documentElement.setAttribute('data-bs-theme', theme)
        localStorage.setItem(this.storageKey, theme)
    }
}
