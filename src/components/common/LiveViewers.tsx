import { useEffect, useMemo, useState } from "react";
import { Eye } from "lucide-react";
import { getFirebase } from "@/lib/firebase";
import {
  onDisconnect,
  onValue,
  push,
  ref,
  remove,
  serverTimestamp,
  set,
} from "firebase/database";

const LiveViewers = () => {
  const [count, setCount] = useState<number | null>(null);

  const fb = useMemo(() => getFirebase(), []);

  useEffect(() => {
    if (!fb) return;

    const sessionsRef = ref(fb.db, "presence/sessions");
    const sessionRef = push(sessionsRef);

    set(sessionRef, {
      ts: serverTimestamp(),
    }).catch(() => {/* noop */});

    onDisconnect(sessionRef).remove().catch(() => {/* noop */});

    const unsubscribe = onValue(sessionsRef, (snap) => {
      setCount(snap.exists() ? snap.numChildren() : 0);
    });

    return () => {
      unsubscribe();
      remove(sessionRef).catch(() => {/* noop */});
    };
  }, [fb]);

  if (!fb) return null;

  return (
    <div className="flex items-center gap-1 rounded-md border border-border/60 bg-card/50 px-2 py-1 text-xs text-foreground/80">
      <Eye className="size-3.5" />
      <span>{count ?? "—"}</span>
    </div>
  );
};

export default LiveViewers;




