export const renderShortenedURL = ({ data, $urlList }) => {
	const $li = document.createElement('li')
	$li.classList.add('list-url__item')

	const $button = document.createElement('button')
	$button.classList.add('btn', 'shadow')

	$button.textContent = 'Copy'

	$li.insertAdjacentText('afterbegin', data.result.short_link)
	$li.insertAdjacentElement('beforeend', $button)
	$button.dataset.url = data.result.short_link

	$urlList.appendChild($li)
}
