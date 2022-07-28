import { Test, TestingModule } from '@nestjs/testing';
import { AddressbooksService } from './addressbooks.service';

describe('AddressbooksService', () => {
  let service: AddressbooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressbooksService],
    }).compile();

    service = module.get<AddressbooksService>(AddressbooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
