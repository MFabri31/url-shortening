export const copyToClipboard = async ({ textCopied }) => {
	try {
		await navigator.clipboard.writeText(textCopied)
		alert('Content copied to clipboard')
	} catch (err) {
		console.error('Failed to copy: ', err)
	}
}
