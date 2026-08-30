interface AdvisorCardProps {
  name: string;
  emails: string[];
  phones: string[];
}

export default function AdvisorCard({
  name,
  emails,
  phones,
}: AdvisorCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-[#d9d9d9] bg-white p-6">
      <h3 className="text-lg font-semibold leading-6 text-[#101828]">
        {name}
      </h3>

      <div className="mt-5 space-y-4">
        <div>
          <p className="text-sm font-semibold leading-5 text-[#101828]">
            Correo
          </p>

          <div className="mt-1 space-y-1">
            {emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="block break-all text-base font-normal leading-6 text-[#4b5563] transition hover:text-[#ff6500]"
              >
                {email}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold leading-5 text-[#101828]">
            Teléfono
          </p>

          <div className="mt-1 space-y-1">
            {phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone}`}
                className="block text-base font-normal leading-6 text-[#4b5563] transition hover:text-[#ff6500]"
              >
                {phone}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <a
          href={`https://wa.me/57${phones[0]}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg border border-[#ff6500] px-4 py-2 text-sm font-semibold leading-5 text-[#ff6500] transition hover:bg-[#ff6500] hover:text-white"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </article>
  );
}