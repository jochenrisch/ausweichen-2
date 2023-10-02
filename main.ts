let item = false
basic.clearScreen()
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(1000)
basic.forever(function () {
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 30 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        item = Math.randomBoolean()
        if (item == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.pause(800)
        }
        if (item && false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 128)
            music.play(music.tonePlayable(185, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.pause(800)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
