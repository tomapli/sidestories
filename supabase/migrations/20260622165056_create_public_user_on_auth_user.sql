CREATE OR REPLACE FUNCTION public.create_public_user_for_auth_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
	INSERT INTO public.users (user_id)
	VALUES (NEW.id)
	ON CONFLICT (user_id) DO NOTHING;

	RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS create_public_user_for_auth_user ON auth.users;

CREATE TRIGGER create_public_user_for_auth_user
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.create_public_user_for_auth_user();

INSERT INTO public.users (user_id)
SELECT id
FROM auth.users
ON CONFLICT (user_id) DO NOTHING;

ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

GRANT SELECT ON public.users TO authenticated;

CREATE POLICY "Users can read their own profile"
ON public.users
FOR SELECT
TO authenticated
USING ((SELECT auth.uid()) = user_id);
