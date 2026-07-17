const Features = () => {
  return (
    <section className="py-24 bg-[#e9f4ff]">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-bold">
          Everything you need.
        </h2>

        <p className="mt-5 text-gray-500">
          Simple, beautiful and fast note taking.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-emerald-200 shadow-lg rounded-2xl p-8">
            <h3 className="text-2xl font-bold">📝 Notes</h3>
            <p className="mt-3 text-gray-500">
              Create unlimited notes.
            </p>
          </div>

          <div className="shadow-lg rounded-2xl bg-amber-200 p-8">
            <h3 className="text-2xl font-bold">☁ Cloud</h3>
            <p className="mt-3 text-gray-500">
              Securely saved in MongoDB.
            </p>
          </div>

          <div className="shadow-lg rounded-2xl bg-red-200 p-8">
            <h3 className="text-2xl font-bold">🔒 Secure</h3>
            <p className="mt-3 text-gray-500">
              JWT Authentication.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Features;