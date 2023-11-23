const Card = () => {
  return (
    <div className="relative mx-auto w-full max-w-sm border-2 border-neutral-800 rounded-lg bg-neutral-900 p-8">
      <h4 className="mb-4 mt-2 w-full text-3xl font-bold text-neutral-50">
        Dark Mode
      </h4>
      <p className="text-neutral-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum sed
        blanditiis iste molestias nemo nobis repellendus nisi dolorum itaque
        optio impedit cum voluptatem facilis minima, quasi laborum. Nihil,
        quaerat.
      </p>

      <button className="bg-indigo-500 hover:bg-indigo-600 transition-colors text-white font-semibold w-full py-2 rounded-md mt-8">
        Sign Up
      </button>
    </div>
  );
};

export default Card;
