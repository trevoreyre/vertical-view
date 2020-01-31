import SQSParallax from './controllers/Parallax';

function Parallax(element) {
  const { nodes, destroy: sqsDestroy } = SQSParallax(element);

  const handleMouseEnter = node => () => {
    node.mediaWrapper.classList.add('active');
    node.mediaElement.classList.add('active');
  };

  const handleMouseLeave = node => () => {
    node.mediaWrapper.classList.remove('active');
    node.mediaElement.classList.remove('active');
  };

  const init = () => {
    nodes.forEach(node => {
      node.callsToAction = Array.from(node.originalNode.querySelectorAll('.sqs-block-button-element'));
      node.callsToAction.forEach(cta => {
        cta.addEventListener('mouseenter', handleMouseEnter(node));
        cta.addEventListener('mouseleave', handleMouseLeave(node));
      });
    });
  };

  const destroy = () => {
    nodes.forEach(node => {
      node.callsToAction.forEach(cta => {
        cta.removeEventListener('mouseenter', handleMouseEnter(node));
        cta.removeEventListener('mouseleave', handleMouseLeave(node));
      });
    });
    sqsDestroy();
  };

  init();
  return {
    destroy
  };
}

function FAQAccordion() {
  const faqSection = document.querySelector('#frequently-asked-questions');
  if (!faqSection) {
    return;
  }

  const accordionHeaders = faqSection.querySelectorAll('h3');
  accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener('click', () => {
      accordionHeader.classList.toggle('active');
    });
  });
}

export { Parallax, FAQAccordion };
