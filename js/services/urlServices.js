const API_URL = 'https://api.shrtco.de/v2/shorten?url='

export const getShortenUrl = async ({ userUrl }) => {
	try {
		const res = await fetch(`${API_URL}${userUrl}`)
		const data = await res.json()
		return data
	} catch (error) {
		console.log(error)
	}
}
