class StateAudio {
    audio: HTMLAudioElement | null = null

    duration = 0
    currentTime = 0
    percent = 0
    volume = 0.2
    playing = false

    setAudio(src: string) {
        this.audio = new Audio(src)

        this.audio.addEventListener('loadedmetadata', () => {
            this.duration = this.audio!.duration
        })
    }
}

export function useAudio() {
    //data
    const state = useState<StateAudio>('audio', () => new StateAudio())

    let timer: NodeJS.Timer = null as any

    // methods
    function update() {
        if (state.value.audio === null) return

        state.value.currentTime = state.value.audio.currentTime
        state.value.percent = state.value.audio.currentTime / state.value.duration * 100
    }

    function play() {
        if (state.value.audio === null) return

        state.value.playing = true
        state.value.audio.play()
        state.value.audio.volume = state.value.volume

        timer = setInterval(update, 1000)
    }
    
    function pause() {
        if (state.value.audio === null) return

        state.value.playing = false
        state.value.audio.pause()

        clearInterval(timer)
    }

    function toggle() {
        if (state.value.audio === null) return

        if (state.value.playing) {
            pause()
        } else {
            play()
        }
    }

    function seek(e: MouseEvent) {
        if (state.value.audio === null) return

        const target = e.target as HTMLElement
        const rect = target.getBoundingClientRect()
        const x = e.clientX - rect.left
        const percent = x / target.clientWidth

        state.value.audio.currentTime = percent * state.value.duration
    }

    return {
        // state
        state,
        currentTime: computed(() => state.value.currentTime),
        duration: computed(() => state.value.duration),
        percent: computed(() => state.value.percent),
        playing: computed(() => state.value.playing),

        // methods
        setAudio: state.value.setAudio.bind(state.value),
        play,
        pause,
        toggle,
        seek,
    }
}