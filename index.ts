class Foo {
  public readonly barDerived = {
    bar: this.bar,
  };

  constructor(private readonly bar: string) {}
}

// test that we can print the value of _barDerived.bar
const foo = new Foo('baz');
console.log(foo.barDerived.bar);
