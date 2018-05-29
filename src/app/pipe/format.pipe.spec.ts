import { VehiculePipe, AdressePipe, PersonnePipe, DatePipe } from './format.pipe';

describe('VehiculePipe', () => {
  it('create an instance', () => {
    const pipe = new VehiculePipe();
    expect(pipe).toBeTruthy();
  });
});

describe('AdressePipe', () => {
  it('create an instance', () => {
    const pipe = new AdressePipe();
    expect(pipe).toBeTruthy();
  });
});

describe('PersonnePipe', () => {
  it('create an instance', () => {
    const pipe = new PersonnePipe();
    expect(pipe).toBeTruthy();
  });
});

describe('DatePipe', () => {
  it('create an instance', () => {
    const pipe = new DatePipe();
    expect(pipe).toBeTruthy();
  });
});