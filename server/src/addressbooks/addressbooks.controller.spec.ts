import { Test, TestingModule } from '@nestjs/testing';
import { AddressbooksController } from './addressbooks.controller';
import { AddressbooksService } from './addressbooks.service';

describe('AddressbooksController', () => {
  let controller: AddressbooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddressbooksController],
      providers: [AddressbooksService],
    }).compile();

    controller = module.get<AddressbooksController>(AddressbooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
