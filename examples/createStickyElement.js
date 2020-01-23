// Makes an element sticky and handles behavior
// This was created after bugs with position:sticky

function getElementOffset (element, stickyClass) {
  const isSticky = element.classList.contains(stickyClass)

  // if element is fixed to the top,
  // we must un-fix it first, to get its natural offset
  if (isSticky) element.classList.remove(stickyClass)
  const offset = element.offsetTop
  if (isSticky) element.classList.add(stickyClass)

  return offset
}

function setStickyCondition (element, stickyClass) {
  const elementPosition = getElementOffset(element, stickyClass)
  const scrollPosition = window.scrollY
  const hasScrolledPastElement = scrollPosition > elementPosition

  if (hasScrolledPastElement) {
    element.classList.add(stickyClass)
  }
  else {
    element.classList.remove(stickyClass)
  }
}

function createStickyElement (element, stickyClass = 'sticky') {
  const setSticky = () => setStickyCondition(element, stickyClass)

  setSticky()
  window.addEventListener('scroll', setSticky)
  window.addEventListener('resize', setSticky)
}

export default createStickyElement
