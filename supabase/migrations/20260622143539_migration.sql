CREATE TABLE public.games (id uuid DEFAULT gen_random_uuid() NOT NULL, name character varying(256) NOT NULL, description text, created_at timestamp without time zone DEFAULT now() NOT NULL, updated_at timestamp with time zone);
ALTER TABLE public.games ADD CONSTRAINT games_pkey PRIMARY KEY (id);
GRANT MAINTAIN, REFERENCES, TRIGGER, TRUNCATE ON public.games TO anon;
GRANT MAINTAIN, REFERENCES, TRIGGER, TRUNCATE ON public.games TO authenticated;
GRANT MAINTAIN, REFERENCES, TRIGGER, TRUNCATE ON public.games TO service_role;
