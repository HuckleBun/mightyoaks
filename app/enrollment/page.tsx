export default function Enrollment() {
  return (
    <div className="py-12">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-oak-50 to-white py-16 mb-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-oak-800 text-center">
            Enrollment
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="container-custom">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              Enrollment for the 2025/2026 school year is <strong>full</strong> for all grades and registration is <strong>closed</strong>. Please check back in January to fill out an inquiry form for the 2026/2027 school year.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

