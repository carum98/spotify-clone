class StateAudio {
    audio: HTMLAudioElement | null = null

    id: string | null = null

    duration = 0
    currentTime = 0
    percent = 0
    volume = 0.2
    playing = false

    setAudio(src: string) {
        if (this.audio !== null) {
            this.audio.pause()
            this.audio = null

            this.duration = 0
            this.currentTime = 0
            this.percent = 0
            this.playing = false
        }

        this.audio = new Audio(src)

        this.audio.addEventListener('ended', () => {
            this.playing = false
        })

        this.audio.addEventListener('pause', () => {
            this.playing = false
        })

        this.audio.addEventListener('play', () => {
            this.playing = true
        })

        this.audio.addEventListener('volumechange', () => {
            this.volume = this.audio!.volume
        })
    }

    // To json
    toJSON() {
        return {
            ...this,
        }
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

        state.value.audio.play()
        state.value.audio.volume = state.value.volume

        timer = setInterval(update, 1000)
    }
    
    function pause() {
        if (state.value.audio === null) return

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

    function seek(e: MouseEvent, type: 'time' | 'volume') {
        if (state.value.audio === null) return

        const target = e.target as HTMLElement
        const rect = target.getBoundingClientRect()
        const x = e.clientX - rect.left
        const percent = x / target.clientWidth

        if (type === 'time') {
            state.value.audio.currentTime = percent * state.value.duration
        } else if (type === 'volume') {
            state.value.audio.volume = percent
        }

        if (!state.value.playing) {
            play()
        }
    }

    return {
        // state
        state,
        currentTime: computed(() => state.value.currentTime),
        duration: computed(() => state.value.duration),
        percent: computed(() => state.value.percent),
        playing: computed(() => state.value.playing),
        volume: computed(() => state.value.volume * 100),
        audioId: computed(() => state.value.id),

        // methods
        setAudio: (src: string, id: string) => {
            state.value.id = id

            state.value.setAudio.bind(state.value)(src)

            state.value.audio!.addEventListener('loadedmetadata', () => {
                state.value.duration = state.value.audio!.duration
                play()
            })
        },
        play,
        pause,
        toggle,
        seek: (e: MouseEvent) => seek(e, 'time'),
        seekVolume: (e: MouseEvent) => seek(e, 'volume')
    }
}