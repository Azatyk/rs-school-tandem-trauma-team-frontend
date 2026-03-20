const STORE_PREFIX = 'niro'

type StoreValue<T> = { value: T }

export const createLocalStore = <TSchema extends Record<string, unknown>>(namespace: string) => {
	const prefix = `${STORE_PREFIX}:${namespace}`

	return {
		get<K extends keyof TSchema>(key: K, fallback?: TSchema[K]): TSchema[K] | undefined {
			try {
				const raw = localStorage.getItem(`${prefix}:${String(key)}`)

				if (raw === null) return fallback

				const parsed: StoreValue<TSchema[K]> = JSON.parse(raw)

				return parsed.value ?? fallback
			} catch {
				return fallback
			}
		},

		set<K extends keyof TSchema>(key: K, value: TSchema[K]) {
			try {
				localStorage.setItem(`${prefix}:${String(key)}`, JSON.stringify({ value }))
				return true
			} catch {
				return false
			}
		},

		remove<K extends keyof TSchema>(key: K) {
			try {
				localStorage.removeItem(`${prefix}:${String(key)}`)
				return true
			} catch {
				return false
			}
		},

		clear() {
			try {
				Object.keys(localStorage)
					.filter((k) => k.startsWith(`${prefix}:`))
					.forEach((k) => {
						localStorage.removeItem(k)
					})
				return true
			} catch {
				return false
			}
		}
	}
}
