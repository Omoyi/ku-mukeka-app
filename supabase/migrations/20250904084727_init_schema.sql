-- USERS TABLE
create table users (
  user_id uuid primary key default gen_random_uuid(),
  name varchar(100),
  email varchar(150) unique,
  phone varchar(15),
  password_hash text,
  role varchar(20),
  active_mode varchar(100),
  auth_provider varchar(70),
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- STORIES TABLE
create table stories (
  story_id uuid primary key default gen_random_uuid(),
  user_id uuid references users(user_id) on delete cascade,
  title varchar(255),
  description text,
  category varchar(100),
  age_group varchar(50),
  language varchar(50),
  medium varchar(20),
  file_url text,
  image_url text, -- ✅ added story image
  transcription text,
  moderation_status varchar(20) default 'pending', -- ✅ simplified enum to varchar
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- COMMENTS TABLE
create table comments (
  comment_id uuid primary key default gen_random_uuid(),
  story_id uuid references stories(story_id) on delete cascade,
  user_id uuid references users(user_id) on delete cascade,
  content text,
  created_at timestamp default now()
);

-- FAVORITES TABLE
create table favorites (
  favorite_id uuid primary key default gen_random_uuid(),
  user_id uuid references users(user_id) on delete cascade,
  story_id uuid references stories(story_id) on delete cascade,
  created_at timestamp default now()
);

-- AUDIT LOG TABLE
create table audit_log (
  log_id uuid primary key default gen_random_uuid(),
  user_id uuid references users(user_id) on delete set null,
  story_id uuid references stories(story_id) on delete set null,
  action varchar(20), -- e.g. "created", "edited", "deleted", "approved"
  time timestamp default now(),
  details jsonb
);
