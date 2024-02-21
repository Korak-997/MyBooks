<script>
	export let newAuthor;
	export let id;
	export let currentAuthor;
	import { addAuthorToCloud, updateAuthorInCloud } from '$lib/helpers/db';
	import { cleanObject } from '$lib/helpers/methods';

	let author;
	import Icon from '@iconify/svelte';

	const validateAuthor = () => {
		const emptyOrFalseKeys = [];
		const keysToValidate = ['name'];
		keysToValidate.forEach((key) => {
			if (author.hasOwnProperty(key)) {
				const value = author[key];

				// Check if the value is empty or false
				if (!value) {
					emptyOrFalseKeys.push(key);
				}
			}
		});
		if (emptyOrFalseKeys.length == 0) {
			return true;
		} else {
			errorText = `Value of (${emptyOrFalseKeys}) cannot be empty`;
			showError = true;
			return false;
		}
	};
	let showError = false;
	let errorText = '';
	author = newAuthor
		? {
				name: '',
				born: '',
				died: '',
				birth_place: '',
				image: ''
			}
		: currentAuthor;
	let showSuccess = false;
	const handleImageUpload = (e) => {
		// Scale down image on image upload
		//Convert to base64 String on image upload
		const reader = new FileReader();
		reader.onload = function (e) {
			const img = new Image();
			img.src = e.target.result;
			//scales down image to be
			// 250px X 250px
			img.onload = function () {
				const canvas = document.createElement('canvas');
				const ctx = canvas.getContext('2d');
				canvas.width = 250;
				canvas.height = 250;
				ctx.drawImage(img, 0, 0, 250, 250);
				const resizedBase64 = canvas.toDataURL('image/png');
				//author_image source to base64 string
				//so author_image be saved in database
				author.image = resizedBase64;
			};
		};
		reader.readAsDataURL(e.target.files[0]);
	};
	const saveAuthor = async () => {
		let saved;
		let isValid = validateAuthor();
		if (isValid) {
			if (id && !newAuthor) {
				saved = await updateAuthorInCloud(cleanObject(author), author.id);
				if (saved.status) {
					location.href = '/';
				}
			} else {
				//cleans author object
				saved = await addAuthorToCloud(cleanObject(author));
				console.log(saved);
				if (saved.status) {
					showSuccess = true;
					setTimeout(() => (showSuccess = false), 1500);
					author = {
						name: '',
						born: '',
						died: '',
						birth_place: '',
						image: ''
					};
				}
			}
		}
	};
</script>

{#if showSuccess}
	<div class="toast toast-top toast-center">
		<div class="alert alert-success">
			<span>Author saved Successfully.</span>
		</div>
	</div>
{/if}
{#if showError}
	<div class="toast toast-top toast-center">
		<div class="alert alert-error">
			<span>{errorText}</span>
		</div>
	</div>
{/if}
<div class="join">
	<label for="name" class="btn join-item rounded-l-full">Name</label>
	<input
		class="input input-bordered join-item"
		bind:value={author.name}
		type="text"
		name="name"
		id="name"
	/>
</div>
<div class="join">
	<label for="born" class="btn join-item rounded-l-full">Born</label>
	<input
		class="input input-bordered join-item"
		bind:value={author.born}
		type="text"
		name="born"
		id="born"
	/>
</div>
<div class="join">
	<label for="birth_place" class="btn join-item rounded-l-full">Birth Place</label>
	<input
		class="input input-bordered join-item"
		bind:value={author.birth_place}
		type="text"
		name="birth_place"
		id="birth_place"
	/>
</div>
<div class="join">
	<label for="died" class="btn join-item rounded-l-full">Died</label>
	<input
		class="input input-bordered join-item"
		bind:value={author.died}
		type="text"
		name="died"
		id="died"
	/>
</div>
<label class="form-control w-full max-w-xs">
	<div class="label">
		<span class="label-text" for="cover">Add Image</span>
	</div>
	<input
		type="file"
		class="file-input file-input-bordered w-full max-w-xs"
		name="image"
		id="image"
		on:change={handleImageUpload}
	/>
</label>

<div class="flex items-center justify-around w-11/12 shadow-xl shadow-black p-4 flex-wrap">
	<a href="/authors" class="btn btn-error"><Icon icon="iconoir:cancel" class="text-2xl" /></a>
	<button on:click={saveAuthor} class="btn btn-success"
		><Icon icon="material-symbols:save-outline" class="text-2xl" /></button
	>
</div>
