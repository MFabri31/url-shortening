export const getFormValues = ({ $form }) => {
	const [url] = $form.elements

	const userUrl = url.value

	return { userUrl }
}
