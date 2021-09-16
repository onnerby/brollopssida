<template>
	<div class="doe-paper">
		<header>
			<div class="largehead">
				<div class="lead">Vi ska gifta oss</div>
				<h1>Anna &amp; Daniel</h1>
				<div class="lead">28 Augusti 2021</div>
			</div>
			<div class="doe-menu" role="navigation">
				<router-link to="/home">Välkommen</router-link>
				<router-link to="/omoss">Om oss</router-link>
				<router-link to="/brollop">Bröllopet</router-link>
				<router-link to="/folje">Bröllopsfölje</router-link>
				<router-link to="/onskelista">Önskelista</router-link>
				<router-link to="/osa">O.s.a</router-link>
			</div>
		</header>
		<div role="main" class="doe-main">
			<router-view></router-view>
		</div>

	</div>
</template>
