interface WhatsAppResponse {
  advisor: string;
  phone: string;
}

export async function contactWhatsApp(message: string) {
  const whatsappWindow = window.open("", "_blank");

  try {
    const response = await fetch("/api/whatsapp", {
      method: "POST",
    });

    if (!response.ok) {
      throw new Error("No fue posible asignar un asesor.");
    }

    const data: WhatsAppResponse = await response.json();

    const whatsappUrl = `https://wa.me/${data.phone}?text=${encodeURIComponent(message)}`;

    if (whatsappWindow) {
      whatsappWindow.location.href = whatsappUrl;
    } else {
      window.location.href = whatsappUrl;
    }
  } catch (error) {
    console.error("Error abriendo WhatsApp:", error);

    if (whatsappWindow) {
      whatsappWindow.close();
    }

    alert("No fue posible abrir WhatsApp. Inténtalo nuevamente.");
  }
}
