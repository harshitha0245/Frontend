import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious food, delivered to you!</h2>
      <p className={classes.choose}>
        Choose your favorite meal and enjoy a delicious lunch or dinner at home!
      </p>
      <p className={classes.cooking}>
        *All our meals are cooked with high-quality ingredients, just-in-time
        and of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
