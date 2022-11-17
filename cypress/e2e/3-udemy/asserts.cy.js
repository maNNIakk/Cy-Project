/// <reference types="cypress"/>

it('Equality', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b');
})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;
    expect(a).to.be.true;
    expect(a).not.to.be.null;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(c).to.be.undefined;
})

it('Object Equality', () =>{
    const obj = {
        a:1,
        b:2
    }

    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.equal(obj);
    expect(obj).eql({a:1,b:2});
    expect(obj).include({a:1});
    expect(obj).include({b:2});
    expect(obj).to.have.property('a',1);
    expect(obj).to.have.property('b',2);
    expect(obj).to.not.be.empty;
    expect({}).to.be.empty;
})

it('Arrays', () =>{
    const arr = [1,2,3];
    expect(arr).to.have.members([1,2,3]);
    expect(arr).to.include.members([1,3]);
    expect(arr).to.not.be.empty;
    expect([]).to.be.empty;
    expect(arr).to.have.length(3);
})

it('Types', () => {
    const num = 1;
    const str = 'String';

    expect(num).to.be.a('number');
    expect(str).to.be.a('string');
    expect({}).to.be.an('object');
    expect([]).to.be.an('array');
})

it('String', () => {
    const str = 'String de test';

    expect(str).to.be.equal('String de test');
    expect(str).to.have.length(14);
    expect(str).to.contains('de');
    expect(str).to.match(/^String/);
    expect(str).to.match(/test$/);
    expect(str).to.match(/.{14}/);
    expect(str).to.match(/\w+/);
    expect(str).to.match(/\D+/);

})