const isInViewport = function (el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight + 300)
    );
}

const module = { isInViewport };
export default module;