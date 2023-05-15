const myDebounce = (fn: Function, delay = 0, immediate = false) => {
    let timeout: NodeJS.Timeout

    return (...args: string[]) => {
        if (immediate && !timeout) fn(...args)
        clearTimeout(timeout)

        // Call immediately if the first argument is an empty string
        // This is used to call the function immediately when the user clears the input field
        // or clicks the clear button
        if (args[0] === '') {
            fn(...args)
            return
        }

        timeout = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

export function useDebounce(initialValue: string, delay: number, immediate: boolean = false) {
    const state = ref(initialValue)

    return customRef(
        (myTrack, myTrigger) => ({
            get() {
                myTrack()
                return state.value
            },
            set: myDebounce(
                (value: string) => {
                    state.value = value
                    myTrigger()
                },
                delay,
                immediate
            ),
        })
    )
}
