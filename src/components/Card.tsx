const Card = () => {
  return (
    <div className="relative mx-auto w-full max-w-sm border-2 border-border rounded-lg bg-card p-8">
      <h4 className="mb-4 mt-2 w-full text-3xl font-bold text-copy-primary">
        Dark Mode
      </h4>
      <p className="text-copy-secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum sed
        blanditiis iste molestias nemo nobis repellendus nisi dolorum itaque
        optio impedit cum voluptatem facilis minima, quasi laborum. Nihil,
        quaerat.
      </p>

      <button className="bg-cta hover:bg-cta-active transition-colors text-cta-text font-semibold w-full py-2 rounded-md mt-8">
        Sign Up
      </button>
    </div>
  );
};

export default Card;
