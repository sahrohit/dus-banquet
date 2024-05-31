"use client";

import ContactForm from "../forms/contact";
import useContactModal from "../store/use-contact-modal";
import Modal from "./modal";

const ContactModal = () => {
  const contactModal = useContactModal();

  return (
    <Modal showModal={contactModal.isOpen} setShowModal={contactModal.onClose}>
      <ContactForm />
    </Modal>
  );
};

export default ContactModal;
