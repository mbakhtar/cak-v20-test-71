modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    modules.relay1.setActive(true)
    basic.pause(5000)
    modules.relay1.setActive(false)
})
basic.showIcon(IconNames.StickFigure)
basic.forever(function () {
	
})
