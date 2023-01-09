const handleSounds = (note, index) => {
  return new Promise((resolve) => {
    const frequencies = [415.30, 466.16, 523.25, 554.37, 622.25, 698.46, 783.99, 830.61]
    const audioCtx = new AudioContext()
    const gain = audioCtx.createGain()
    const oscillator = audioCtx.createOscillator()
    oscillator.type = 'curve'
    oscillator.connect(gain)
    oscillator.frequency.value = frequencies[note]
    oscillator.connect(audioCtx.destination)
    oscillator.start(audioCtx.currentTime + index)
    oscillator.stop(audioCtx.currentTime + index + 0.5)
  })
}

export default handleSounds