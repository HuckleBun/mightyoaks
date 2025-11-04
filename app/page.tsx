'use client'

function ScriptureLink({ reference, url }: { reference: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-600 hover:text-primary-700 transition-colors hover:underline"
    >
      {reference}
    </a>
  )
}

export default function Home() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-oak-50 to-white py-16 mb-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-oak-800 mb-4">
            Mighty Oaks Enrichment Center
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Providing fun, hands on, supplemental classes to assist families in the home education of their children
          </p>
        </div>
      </section>

      {/* Statement of Purpose */}
      <section className="container-custom mb-16">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oak-800 mb-6">Statement of Purpose</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Mighty Oaks Enrichment Center exists to provide fun, hands on, supplemental classes to assist families in the home education of their children. All subjects are taught with a Christ-centered Biblical perspective.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe that God loves all people and He has a purpose and a plan for the life of each individual. Our goal is to encourage, support, and help equip each student as they seek that purpose and develop their skills to fulfill God&apos;s plan for their lives.
            </p>
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="container-custom mb-16">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oak-800 mb-6">Statement of Faith</h2>
          <div className="space-y-4">
            <FaithPoint>
              We believe the Bible is the inspired, inerrant, and authoritative Word of God.{' '}
              <span className="text-gray-600 italic">
                (<ScriptureLink reference="2 Timothy 3:16-17" url="https://www.biblegateway.com/passage/?search=2+Timothy+3%3A16-17&version=NIV" />;{' '}
                <ScriptureLink reference="2 Peter 1:19-21" url="https://www.biblegateway.com/passage/?search=2+Peter+1%3A19-21&version=NIV" />)
              </span>
            </FaithPoint>

            <FaithPoint>
              We believe in a literal, grammatical-historical interpretation of the Bible, and accept the historical record of the Bible as accurate. This includes the account of creation in Genesis 1.
            </FaithPoint>

            <FaithPoint>
              We believe there is one God eternally existing in three persons: Father, Son and Holy Spirit.{' '}
              <span className="text-gray-600 italic">
                (<ScriptureLink reference="Matthew 28:19" url="https://www.biblegateway.com/passage/?search=Matthew+28%3A19&version=NIV" />;{' '}
                <ScriptureLink reference="John 1:1,18" url="https://www.biblegateway.com/passage/?search=John+1%3A1%2C18&version=NIV" />;{' '}
                <ScriptureLink reference="6:27" url="https://www.biblegateway.com/passage/?search=John+6%3A27&version=NIV" />;{' '}
                <ScriptureLink reference="Acts 5:3-4" url="https://www.biblegateway.com/passage/?search=Acts+5%3A3-4&version=NIV" />;{' '}
                <ScriptureLink reference="Titus 2:12-13" url="https://www.biblegateway.com/passage/?search=Titus+2%3A12-13&version=NIV" />)
              </span>
            </FaithPoint>

            <FaithPoint>
              We believe that Jesus Christ is God Himself, came to earth in the flesh, was born of a virgin, and lived a sinless life. He died a substitutionary and atoning death on the cross. He arose bodily from the grave and ascended into heaven where He presently sits at the right hand of God.{' '}
              <span className="text-gray-600 italic">
                (<ScriptureLink reference="Matthew 1:25" url="https://www.biblegateway.com/passage/?search=Matthew+1%3A25&version=NIV" />;{' '}
                <ScriptureLink reference="Luke 1:26-38" url="https://www.biblegateway.com/passage/?search=Luke+1%3A26-38&version=NIV" />;{' '}
                <ScriptureLink reference="John 1:18" url="https://www.biblegateway.com/passage/?search=John+1%3A18&version=NIV" />;{' '}
                <ScriptureLink reference="Acts 1:9-10" url="https://www.biblegateway.com/passage/?search=Acts+1%3A9-10&version=NIV" />;{' '}
                <ScriptureLink reference="Romans 3:21-25" url="https://www.biblegateway.com/passage/?search=Romans+3%3A21-25&version=NIV" />;{' '}
                <ScriptureLink reference="8:34" url="https://www.biblegateway.com/passage/?search=Romans+8%3A34&version=NIV" />;{' '}
                <ScriptureLink reference="1 Corinthians 15:4" url="https://www.biblegateway.com/passage/?search=1+Corinthians+15%3A4&version=NIV" />;{' '}
                <ScriptureLink reference="Ephesians 1:20" url="https://www.biblegateway.com/passage/?search=Ephesians+1%3A20&version=NIV" />;{' '}
                <ScriptureLink reference="1 Timothy 2:5-6" url="https://www.biblegateway.com/passage/?search=1+Timothy+2%3A5-6&version=NIV" />;{' '}
                <ScriptureLink reference="Titus 2:13" url="https://www.biblegateway.com/passage/?search=Titus+2%3A13&version=NIV" />;{' '}
                <ScriptureLink reference="Hebrews 7:25" url="https://www.biblegateway.com/passage/?search=Hebrews+7%3A25&version=NIV" />;{' '}
                <ScriptureLink reference="9:24" url="https://www.biblegateway.com/passage/?search=Hebrews+9%3A24&version=NIV" />;{' '}
                <ScriptureLink reference="13:8" url="https://www.biblegateway.com/passage/?search=Hebrews+13%3A8&version=NIV" />;{' '}
                <ScriptureLink reference="1 John 2:1-2" url="https://www.biblegateway.com/passage/?search=1+John+2%3A1-2&version=NIV" />)
              </span>
            </FaithPoint>

            <FaithPoint>
              We believe that the Holy Spirit convicts the world of sin and leads and guides believers into truth. He indwells believers permanently, seals them unto the day of redemption, and bestows spiritual gifts upon them.{' '}
              <span className="text-gray-600 italic">
                (<ScriptureLink reference="John 16:8-11" url="https://www.biblegateway.com/passage/?search=John+16%3A8-11&version=NIV" />;{' '}
                <ScriptureLink reference="Romans 8:16" url="https://www.biblegateway.com/passage/?search=Romans+8%3A16&version=NIV" />;{' '}
                <ScriptureLink reference="1 Corinthians 6:19" url="https://www.biblegateway.com/passage/?search=1+Corinthians+6%3A19&version=NIV" />;{' '}
                <ScriptureLink reference="12:1, 4" url="https://www.biblegateway.com/passage/?search=1+Corinthians+12%3A1%2C4&version=NIV" />;{' '}
                <ScriptureLink reference="Ephesians 1:13, 14" url="https://www.biblegateway.com/passage/?search=Ephesians+1%3A13%2C14&version=NIV" />;{' '}
                <ScriptureLink reference="4:30" url="https://www.biblegateway.com/passage/?search=Ephesians+4%3A30&version=NIV" />)
              </span>
            </FaithPoint>

            <FaithPoint>
              We believe mankind is created in God&apos;s image, as male or female, and that an individual&apos;s gender corresponds with his or her God-given biological gender. Further, being descended from Adam, all mankind inherits a sinful nature and is totally unable to save themselves from the natural consequences of sin.{' '}
              <span className="text-gray-600 italic">
                (<ScriptureLink reference="Genesis 1:27" url="https://www.biblegateway.com/passage/?search=Genesis+1%3A27&version=NIV" />;{' '}
                <ScriptureLink reference="3" url="https://www.biblegateway.com/passage/?search=Genesis+3&version=NIV" />;{' '}
                <ScriptureLink reference="Psalm 139:14" url="https://www.biblegateway.com/passage/?search=Psalm+139%3A14&version=NIV" />;{' '}
                <ScriptureLink reference="Acts 4:12" url="https://www.biblegateway.com/passage/?search=Acts+4%3A12&version=NIV" />;{' '}
                <ScriptureLink reference="Romans 1:18-32" url="https://www.biblegateway.com/passage/?search=Romans+1%3A18-32&version=NIV" />;{' '}
                <ScriptureLink reference="5:10-19" url="https://www.biblegateway.com/passage/?search=Romans+5%3A10-19&version=NIV" />;{' '}
                <ScriptureLink reference="Ephesians 2:1-2" url="https://www.biblegateway.com/passage/?search=Ephesians+2%3A1-2&version=NIV" />)
              </span>
            </FaithPoint>

            <FaithPoint>
              We believe that salvation is the gift of God&apos;s grace given to all who &quot;call upon the name of the Lord&quot;. It cannot be gained by good works, but is a free gift for all who put their trust in Jesus Christ and His finished work on the cross. All who trust in Jesus Christ as Savior and Lord are forgiven and saved from their sins and made righteous before God and given the right to be called His children.{' '}
              <span className="text-gray-600 italic">
                (<ScriptureLink reference="Romans 10:12" url="https://www.biblegateway.com/passage/?search=Romans+10%3A12&version=NIV" />;{' '}
                <ScriptureLink reference="Ephesians 1:4-8" url="https://www.biblegateway.com/passage/?search=Ephesians+1%3A4-8&version=NIV" />;{' '}
                <ScriptureLink reference="2:8-9" url="https://www.biblegateway.com/passage/?search=Ephesians+2%3A8-9&version=NIV" />)
              </span>
            </FaithPoint>
          </div>
        </div>
      </section>
    </div>
  )
}

function FaithPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 mt-1">
        <div className="w-2 h-2 rounded-full bg-oak-600"></div>
      </div>
      <p className="text-gray-700 leading-relaxed flex-1">{children}</p>
    </div>
  )
}

