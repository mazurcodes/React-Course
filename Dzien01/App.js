const header = (
  <>
    <h1 className="title">Witaj na mojej Stronie</h1>
  </>
);

const main = (
  <>
    <section>
      <h2 className="red">To jest nagłówek sekcji pierwszej</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
        consequatur. Quo perferendis qui, eveniet mollitia harum nostrum quaerat
        nulla minima reprehenderit numquam? Id necessitatibus aperiam quia
        quaerat autem dolores expedita?
      </p>
    </section>
    <section>
      <h2>To jest nagłówek sekcji 2</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nihil
        suscipit eius cupiditate labore reprehenderit quam rerum sit quos
        delectus quo optio eum amet, aliquam ullam provident id laudantium vero
        pariatur. Error exercitationem facilis necessitatibus, laboriosam
        accusamus voluptates impedit earum itaque harum! Consequuntur eos,
        veritatis quia iure a, modi impedit, illum veniam amet totam
        voluptatibus adipisci nobis? Vel doloribus ipsum facere impedit
        asperiores vero quod ut nihil quam! Nostrum perspiciatis quaerat
        molestiae fugit officia asperiores facere vitae nobis eveniet ad quas
        dolores velit, enim pariatur voluptatibus tempore id ut mollitia a
        doloribus cupiditate! Quisquam cupiditate laudantium minima fuga,
        deserunt facilis beatae laboriosam quasi obcaecati, sed nihil
        dignissimos rem molestiae iusto aliquid nobis. Ea qui cum, inventore
        deserunt, cumque autem eligendi maiores, nam animi natus explicabo vero.
        Fuga iusto explicabo ab est culpa ipsum voluptatum eum incidunt cumque
        quis architecto beatae quisquam ratione assumenda, tenetur ut! Nostrum
        explicabo cum fuga modi rem ullam eum assumenda, accusantium nobis iure
        asperiores voluptate veniam repudiandae quam natus neque id.
      </p>
    </section>
  </>
);

const footer = (
  <>
    <p>Tutaj jest stopka :)</p>
  </>
);

const app = [header, main, footer];

ReactDOM.render(app, document.querySelector("#root"));
