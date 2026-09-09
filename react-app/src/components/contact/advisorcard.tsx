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
    <article className="flex h-full flex-col rounded-xl border border-[#d9d9d9] bg-white p-3 xl:p-6">
      <h3 className="text-base font-semibold leading-6 text-[#101828] xl:text-lg">
        {name}
      </h3>

      <div className="mt-3 space-y-3 xl:mt-5 xl:space-y-4">
        <div>
          <p className="text-sm font-semibold leading-5 text-[#101828]">
            Correo
          </p>

          <div className="mt-1 space-y-1">
            {emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="block break-all text-sm font-normal leading-5 text-[#4b5563] transition hover:text-[#ff6500] xl:text-base xl:leading-6"
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
                className="block text-sm font-normal leading-5 text-[#4b5563] transition hover:text-[#ff6500] xl:text-base xl:leading-6"
              >
                {phone}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4 xl:pt-6">
        <a
          href={`https://wa.me/57${phones[0]}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-lg border border-[#ff6500] px-2 py-2 text-center text-sm font-semibold leading-5 text-[#ff6500] transition hover:bg-[#ff6500] hover:text-white xl:w-auto xl:px-4"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </article>
  );
}