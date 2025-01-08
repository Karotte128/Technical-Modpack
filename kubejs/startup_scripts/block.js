StartupEvents.registry('block', event => {
	event.create('antimatter_block')
	.displayName('Antimatter Block')
	.soundType('amethyst')
	.hardness(10)
	.resistance(15)
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_iron_tool')
	.fullBlock(true)
	.requiresTool(true)

})