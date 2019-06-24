import { TestBed } from '@angular/core/testing';

import { PostsandusersService } from './postsandusers.service';

describe('PostsandusersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsandusersService = TestBed.get(PostsandusersService);
    expect(service).toBeTruthy();
  });
});
