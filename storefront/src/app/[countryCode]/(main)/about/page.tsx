import { Metadata } from "next"
import Image from "next/image"
import { StoreRegion } from "@medusajs/types"
import { listRegions } from "@lib/data/regions"
import { Layout, LayoutColumn } from "@/components/Layout"

export const metadata: Metadata = {
  title: "About Riti Vastra — Crafted in India, for Every Indian Woman",
  description:
    "Riti Vastra brings together heritage Indian craftsmanship and contemporary design — sarees, lehengas, kurtas, and modern western edits crafted by Indian artisans.",
}

export async function generateStaticParams() {
  const countryCodes = await listRegions().then((regions: StoreRegion[]) =>
    regions.flatMap((r) =>
      r.countries
        ? r.countries
            .map((c) => c.iso_2)
            .filter(
              (value): value is string =>
                typeof value === "string" && Boolean(value)
            )
        : []
    )
  )

  const staticParams = countryCodes.map((countryCode) => ({
    countryCode,
  }))

  return staticParams
}

export default function AboutPage() {
  return (
    <>
      <div className="max-md:pt-18">
        <Image
          src="/images/content/living-room-gray-three-seater-sofa.png"
          width={2880}
          height={1500}
          alt="Riti Vastra — Heritage women's fashion"
          className="md:h-screen md:object-cover"
        />
      </div>
      <div className="pt-8 md:pt-26 pb-26 md:pb-36">
        <Layout>
          <LayoutColumn start={1} end={{ base: 13, lg: 7 }}>
            <h3 className="text-md max-lg:mb-6 md:text-2xl">
              At Riti Vastra, we believe every Indian woman deserves clothing as unique as her story.
            </h3>
          </LayoutColumn>
          <LayoutColumn start={{ base: 1, lg: 8 }} end={13}>
            <div className="md:text-md lg:mt-18">
              <p className="mb-5 lg:mb-9">
                Born from a love for India&apos;s textile heritage and a vision for the modern Indian woman, Riti Vastra brings together hand-embroidered sarees, bridal lehengas, everyday kurtas, and contemporary western edits — all crafted by skilled artisans across India.
              </p>
              <p>
                From a wedding in Jaipur to a Monday at the office in Bengaluru, our pieces are made to move with you through every chapter — designed for Indian body types, woven for Indian summers, and priced for the everyday Indian woman.
              </p>
            </div>
          </LayoutColumn>
          <LayoutColumn>
            <Image
              src="/images/content/living-room-black-armchair-dark-gray-sofa.png"
              width={2496}
              height={1404}
              alt="Riti Vastra craftsmanship — Indian artisans at work"
              className="mt-26 lg:mt-36 mb-8 lg:mb-26"
            />
          </LayoutColumn>
          <LayoutColumn start={1} end={{ base: 13, lg: 8 }}>
            <h3 className="text-md lg:mb-10 mb-6 md:text-2xl">
              Craftsmanship that honours tradition, design that speaks to today.
            </h3>
          </LayoutColumn>
          <LayoutColumn start={1} end={{ base: 13, lg: 6 }}>
            <div className="mb-16 lg:mb-26">
              <p className="mb-5 md:mb-9">
                Every piece in our collection is a quiet collaboration between heritage and modernity. We source pure cotton from Bhuj, silk from Banaras, georgette from Surat, and hand-embroidered work from artisan clusters in Lucknow, Kutch, and Rajasthan.
              </p>
              <p>
                Our zardozi, gota patti, mirror work, and zari embellishments are done by hand — by craftspeople whose skills have been passed down through generations. We pay fair wages, invest in their workshops, and make sure their names are remembered alongside ours.
              </p>
            </div>
          </LayoutColumn>
          <LayoutColumn start={{ base: 2, lg: 1 }} end={{ base: 12, lg: 7 }}>
            <Image
              src="/images/content/gray-one-seater-sofa-wooden-coffee-table.png"
              width={1200}
              height={1600}
              alt="Riti Vastra signature piece"
              className="mb-16 lg:mb-46"
            />
          </LayoutColumn>
          <LayoutColumn start={{ base: 1, lg: 8 }} end={13}>
            <div className="mb-6 lg:mb-20 xl:mb-36">
              <p>
                Our design philosophy is rooted in versatility. A saree should drape effortlessly for a wedding and pack easily for a destination celebration. A kurta should breathe through a Mumbai monsoon and look polished in a Delhi boardroom. A lehenga should hold its weight on the wedding stage and still feel like you.
              </p>
            </div>
            <div className="md:text-md max-lg:mb-26">
              <p>
                We believe in slow, intentional production — small batches, considered choices, and fabrics that age gracefully. By staying close to our artisans and using natural fibres, we keep our footprint light and our pieces true.
              </p>
            </div>
          </LayoutColumn>
        </Layout>
        <Image
          src="/images/content/living-room-gray-three-seater-puffy-sofa.png"
          width={2880}
          height={1618}
          alt="Riti Vastra — community of Indian women"
          className="mb-8 lg:mb-26"
        />
        <Layout>
          <LayoutColumn start={1} end={{ base: 13, lg: 7 }}>
            <h3 className="text-md max-lg:mb-6 md:text-2xl">
              You are at the heart of everything we do.
            </h3>
          </LayoutColumn>
          <LayoutColumn start={{ base: 1, lg: 8 }} end={13}>
            <div className="md:text-md lg:mt-18">
              <p className="mb-5 lg:mb-9">
                Free shipping above ₹999, cash on delivery across India, easy 7-day returns, and a WhatsApp-first support team who actually answer back — because shopping should feel as welcoming as your favourite local boutique.
              </p>
              <p>
                Whether you&apos;re finding your bridal lehenga, refreshing your work wardrobe, or picking out the perfect saree for Karwa Chauth — thank you for inviting Riti Vastra into your story.
              </p>
            </div>
          </LayoutColumn>
        </Layout>
      </div>
    </>
  )
}
