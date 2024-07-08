export const SCROLL_MODE = {
    infinite: 'infinite',
    page_by_page: 'page_by_page',
}

export type SCROLL_MODE = typeof SCROLL_MODE[keyof typeof SCROLL_MODE];

export const PAGE_DISPLAY = {
    single_page: 'single_page',
    double_page: 'double_page',
}

export type PAGE_DISPLAY = typeof PAGE_DISPLAY[keyof typeof PAGE_DISPLAY];