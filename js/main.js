import { getFormValues } from './getFormValues/get_form_values.js'
import { getShortenUrl } from './services/urlServices.js'
import { renderShortenedURL } from './renderShortenedURL/render_shortend_url.js'
import { clearForm } from './clearForm/clear_form.js'
import { copyToClipboard } from './copyToClipboard/copy_to_clipboard.js'

const $form = document.querySelector('form'),
	$urlList = document.querySelector('.list-url')

document.addEventListener('submit', async e => {
	if (e.target.matches('.form')) {
		e.preventDefault()

		const { userUrl } = getFormValues({ $form })

		try {
			const data = await getShortenUrl({ userUrl })

			renderShortenedURL({ data, $urlList })

			clearForm({ $form })
		} catch (error) {
			console.log(error)
		}
	}
})

document.addEventListener('click', async e => {
	if (e.target.matches('.btn')) {
		let textCopied = e.target.getAttribute('data-url')

		await copyToClipboard({ textCopied })
	}
})
