import { Metadata } from "next"
import Image from "next/image"
import { StoreRegion } from "@medusajs/types"
import { listRegions } from "@lib/data/regions"
import { Layout, LayoutColumn } from "@/components/Layout"
import { LocalizedLink } from "@/components/LocalizedLink"
import { CollectionsSection } from "@/components/CollectionsSection"

export const metadata: Metadata = {
  title: "Style Inspiration | Riti Vastra",
  description:
    "Discover style inspiration from Riti Vastra — sarees, lehengas, kurtas, and contemporary edits styled for every occasion.",
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

export default function InspirationPage() {
  return (
    <>
      <div className="max-md:pt-18">
        <Image
          src="/images/content/living-room-dark-green-three-seater-sofa.png"
          width={2880}
          height={1500}
          alt="Living room with dark green three-seater sofa"
          className="md:h-screen md:object-cover mb-8 md:mb-26"
        />
      </div>
      <div className="pb-26 md:pb-36">
        <Layout>
          <LayoutColumn start={1} end={{ base: 13, md: 8 }}>
            <h3 className="text-md mb-6 md:mb-16 md:text-2xl">
              Bridal couture — woven by hand, worn for a lifetime.
            </h3>
            <div className="md:text-md max-md:mb-16 max-w-135">
              <p>
                Our bridal edit celebrates the rituals and craft of Indian weddings —
                hand-embroidered lehengas, regal Anarkalis, and statement sarees
                designed to be heirlooms, not just outfits.
              </p>
            </div>
          </LayoutColumn>
          <LayoutColumn start={{ base: 1, md: 9 }} end={13}>
            <LocalizedLink href="/collections/bridal">
              <Image
                src="/images/content/dark-gray-three-seater-sofa.png"
                width={768}
                height={572}
                alt="Bridal lehenga inspiration"
                className="mb-4 md:mb-6"
              />
              <div className="flex justify-between">
                <div>
                  <p className="mb-1">Bridal Collection</p>
                  <p className="text-grayscale-500 text-xs">
                    Hand-embroidered, made to remember
                  </p>
                </div>
                <div>
                  <p className="font-semibold">From ₹15,999</p>
                </div>
              </div>
            </LocalizedLink>
          </LayoutColumn>
          <LayoutColumn>
            <Image
              src="/images/content/living-room-brown-armchair-gray-corner-sofa.png"
              width={2496}
              height={1404}
              alt="Living room with brown armchair and gray corner sofa"
              className="mt-26 md:mt-36 mb-8 md:mb-26"
            />
          </LayoutColumn>
          <LayoutColumn start={1} end={{ base: 13, md: 8 }}>
            <h3 className="text-md mb-6 md:mb-16 md:text-2xl">
              Everyday essentials — comfort that doesn&apos;t compromise on style.
            </h3>
            <div className="md:text-md max-md:mb-16 max-w-135">
              <p>
                Soft cotton kurtas, breathable cotton-rayon kurtis, and easy-to-wear
                co-ord sets — the everyday edit for Indian women on the move.
                From morning meetings to weekend brunches, get versatile pieces that move with you.
              </p>
            </div>
          </LayoutColumn>
          <LayoutColumn start={{ base: 1, md: 9 }} end={13}>
            <LocalizedLink
              href="/collections/new-arrivals"
              className="mb-8 md:mb-16 inline-block"
            >
              <Image
                src="/images/content/gray-three-seater-sofa.png"
                width={768}
                height={572}
                alt="New arrivals kurta edit"
                className="mb-4 md:mb-6"
              />
              <div className="flex justify-between">
                <div>
                  <p className="mb-1">New Arrivals</p>
                  <p className="text-grayscale-500 text-xs">
                    Fresh styles every week
                  </p>
                </div>
                <div>
                  <p className="font-semibold">From ₹999</p>
                </div>
              </div>
            </LocalizedLink>
            <LocalizedLink href="/collections/under-999">
              <Image
                src="/images/content/gray-arm-chair.png"
                width={768}
                height={572}
                alt="Under 999 affordable edit"
                className="mb-4 md:mb-6"
              />
              <div className="flex justify-between">
                <div>
                  <p className="mb-1">Under ₹999</p>
                  <p className="text-grayscale-500 text-xs">
                    Wardrobe refresh, wallet-friendly
                  </p>
                </div>
                <div>
                  <p className="font-semibold">From ₹499</p>
                </div>
              </div>
            </LocalizedLink>
          </LayoutColumn>
        </Layout>
        <Image
          src="/images/content/living-room-gray-two-seater-puffy-sofa.png"
          width={2880}
          height={1618}
          alt="Living room with gray two-seater puffy sofa"
          className="md:h-screen md:object-cover mt-26 md:mt-36 mb-8 md:mb-26"
        />
        <Layout>
          <LayoutColumn start={1} end={{ base: 13, md: 8 }}>
            <h3 className="text-md mb-6 md:mb-16 md:text-2xl">
              Festive edit — lights, colour, and celebration.
            </h3>
            <div className="md:text-md max-md:mb-16 max-w-135">
              <p>
                From Diwali nights to Karwa Chauth mornings, our festive collection
                brings together hand-embroidered lehengas, regal Anarkalis, and
                statement sarees. Crafted for the moments that matter most.
              </p>
            </div>
          </LayoutColumn>
          <LayoutColumn start={{ base: 1, md: 9 }} end={13}>
            <LocalizedLink href="/collections/festive-edit">
              <Image
                src="/images/content/white-two-seater-sofa.png"
                width={768}
                height={572}
                alt="Festive edit inspiration"
                className="mb-4 md:mb-6"
              />
              <div className="flex justify-between">
                <div>
                  <p className="mb-1">Festive Edit</p>
                  <p className="text-grayscale-500 text-xs">
                    Sparkle through every celebration
                  </p>
                </div>
                <div>
                  <p className="font-semibold">From ₹2,999</p>
                </div>
              </div>
            </LocalizedLink>
          </LayoutColumn>
        </Layout>
        <CollectionsSection className="mt-26 md:mt-36" />
      </div>
    </>
  )
}
