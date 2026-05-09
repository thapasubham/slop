<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Subham Thapa — Software Engineer</title>
	<meta
		name="description"
		content="Subham Thapa — Backend-first software engineer specialising in scalable systems, TypeScript, Go, and full-stack web applications."
	/>
</svelte:head>

<Hero />
<About />
<Skills />
<Experience />
<Projects />
<Contact />
<Footer />
